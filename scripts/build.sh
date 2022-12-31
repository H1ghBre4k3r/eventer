#!/usr/bin/env bash
#
# Get the parent directory of where this script is.
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ] ; do SOURCE="$(readlink "$SOURCE")"; done
DIR="$( cd -P "$( dirname "$SOURCE" )/.." && pwd )"

# Change into that directory
cd "$DIR"

# Get the git commit
GIT_COMMIT=$(git rev-parse HEAD)
GIT_DIRTY=$(test -n "`git status --porcelain`" && echo "+CHANGES" || true)

# link staically
GO_TAGS="";
if [[ -n "${STATIC_LINK}" ]]; then
    GO_TAGS="${GO_TAGS} static"
fi

# Instruct gox to build statically linked binaries
export CGO_ENABLED=1

# Set module download mode to readonly to not implicitly update go.mod
export GOFLAGS="-mod=readonly"

# # In release mode we don't want debug information in the binary
if [[ -n "${PESCA_RELEASE}" ]]; then
    LD_FLAGS="-s -w"
else 
    # In dev mode, LD_FLAGS to be appended during development compilations
    LD_FLAGS="-X main.GitCommit=${GIT_COMMIT}${GIT_DIRTY} $LD_FLAGS"
fi

# Delete the old dir
echo "==> Removing old directory..."
rm -rf bin/*
rm -rf pkg/*
mkdir -p bin/

# Ensure all remote modules are downloaded and cached before build so that
# the concurrent builds launched by gox won't race to redundantly download them.
go mod download

# Build!
echo "==> Building..."
go build\
    -ldflags "${LD_FLAGS}" \
    -tags "${GO_TAGS}" \
    -o "bin/eventer" \
    ./cmd/eventer

# Done!
echo
echo "==> Results:"
ls -hlR bin/

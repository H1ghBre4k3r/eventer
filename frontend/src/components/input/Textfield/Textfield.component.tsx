import React, { FC } from "react";
import {
    KeyboardTypeOptions,
    NativeSyntheticEvent,
    StyleProp,
    Text,
    TextInput,
    TextInputSubmitEditingEventData,
    TextStyle,
    View,
} from "react-native";
import { useTextfieldStyles } from "./Textfield.style";

type TextContentType =
    | "none"
    | "URL"
    | "addressCity"
    | "addressCityAndState"
    | "addressState"
    | "countryName"
    | "creditCardNumber"
    | "emailAddress"
    | "familyName"
    | "fullStreetAddress"
    | "givenName"
    | "jobTitle"
    | "location"
    | "middleName"
    | "name"
    | "namePrefix"
    | "nameSuffix"
    | "nickname"
    | "organizationName"
    | "postalCode"
    | "streetAddressLine1"
    | "streetAddressLine2"
    | "sublocality"
    | "telephoneNumber"
    | "username"
    | "password"
    | "newPassword"
    | "oneTimeCode";

type TextfieldProps = {
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void;
    value?: string;
    onSubmitEditing?: (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
    keyboardType?: KeyboardTypeOptions;
    textContentType?: TextContentType;
};

export const Textfield: FC<TextfieldProps> = ({
    label,
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    onSubmitEditing,
    style,
    labelStyle,
    textContentType,
    keyboardType = "default",
}) => {
    const { TextfieldContainer, TextfieldLabel, TextfieldInput, TextfieldPlaceholder } = useTextfieldStyles();

    return (
        <View style={[TextfieldContainer]}>
            <Text style={[TextfieldLabel, labelStyle]}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[TextfieldInput, style]}
                placeholderTextColor={TextfieldPlaceholder.color}
                textContentType={textContentType}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize="none"
                onSubmitEditing={onSubmitEditing}
                keyboardType={keyboardType}
            />
        </View>
    );
};

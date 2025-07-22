import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";

export default function Home() {
    return (
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.inputContainer}>
                <Button/>
            </View>

            <StatusBar style="auto" />
        </View>
    )
}



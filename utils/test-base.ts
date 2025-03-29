import {test as baseTest} from '@playwright/test';

interface LoginData {
    email: string;
    password: string;
    textLocator: string;
    expectedText: string;
}

export const loginTestData : LoginData[] = [
    {
        email : "tomas.verrastro@gmail.com",
        password : "Testing123",
        textLocator : ".logged-in:visible",
        expectedText: "Welcome, tomas verrastro!"
    },
    {
        email : "tomas.verrastro@gmail.com",
        password : "Testing321",
        textLocator : "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
        expectedText: "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
        },
    {
        email : "bad-email@gmail.com",
        password : "Testing123",
        textLocator : "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']",
        expectedText: "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
        },
    {
        email : "tomas.verrastro@gmail.com",
        password : "",
        textLocator : "#pass-error",
        expectedText: "This is a required field."
        },
    {
        email : "",
        password : "Testing123",
        textLocator : "#email-error",
        expectedText: "This is a required field."
        },
];


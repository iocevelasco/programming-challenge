export const firebaseConfig = {
  apiKey: "AIzaSyChPgiOVnWIDPYnpQzq7qyPj8DvIrCNDPs",

  authDomain: "suyaifitness-bb9f5.firebaseapp.com",

  projectId: "suyaifitness-bb9f5",

  storageBucket: "suyaifitness-bb9f5.appspot.com",

  messagingSenderId: "806379580440",

  appId: "1:806379580440:web:a8d66a66725cb1bcece76d",
};

export const actionCodeSettingsVerification = {
  url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === "development" ? "http://localhost:3000/login" : "",
};

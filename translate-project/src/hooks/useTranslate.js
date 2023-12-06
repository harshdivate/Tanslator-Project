import React, { useState } from "react";

const useTranslate = async (text, translateLanguage) => {
  const [data, setData] = useState("");
  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "9e52b9464bmsh107197cae005512p1a4a48jsn7a748e4cc2ac",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: text,
      target: translateLanguage,
    }),
  };

  try {
    const response = await fetch(url, options).then((res) => res.json());
    const result = response.data.translations[0].translatedText;
    setData(result);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export default useTranslate;

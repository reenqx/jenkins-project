const songs = [
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "360",
        spotify: "https://open.spotify.com/track/4w2GLmK2wnioVnb5CPQeex?si=a48cec852d4b4f39"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "B2b",
        spotify: "https://open.spotify.com/track/4wTvw1dBiPXNiHTh0zzpcI?si=cb1b1f8af9b14db6"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "Apple",
        spotify: "https://open.spotify.com/track/19RybK6XDbAVpcdxSbZL1o?si=81d3812135f54244"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "Talk Talk",
        spotify: "https://open.spotify.com/track/62fqMvguJbsSs9HKhhRfuS?si=3fac5df3471949b5"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "Vondutch",
        spotify: "https://open.spotify.com/track/3Y1EvIgEVw51XtgNEgpz5c?si=ab3733e0731b4fde"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "Mean girls",
        spotify: "https://open.spotify.com/track/1qKCO2Tocwg8CbepJ9uDtd?si=a4251eb99aad47c0"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    },
    {
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
        title: "So I",
        spotify: "https://open.spotify.com/track/0AkiAfilrTUXV49dleC5SB?si=f5d1bd4526c04d2a"  // เปลี่ยนลิงก์ให้เป็นลิงก์ Spotify ที่ถูกต้อง
    }
];

exports.handler = async (event, context) => {
    // เลือกเพลงแบบสุ่มจาก array
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    return {
        statusCode: 200,
        body: JSON.stringify(randomSong)
    };
};

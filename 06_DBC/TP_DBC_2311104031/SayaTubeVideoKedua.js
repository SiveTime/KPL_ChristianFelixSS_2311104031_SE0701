class SayaTubeVideo {
    constructor(title) {
        if (!title || typeof title !== 'string') {
            throw new Error("Title harus berupa string dan tidak boleh null.");
        }
        if (title.length > 100) {
            throw new Error("Title tidak boleh lebih dari 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== 'number' || count <= 0) {
            throw new Error("Jumlah playCount harus berupa angka positif.");
        }
        if (count > 10000000) {
            throw new Error("Penambahan playCount maksimal 10.000.000 per pemanggilan.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Integer overflow: playCount melebihi batas maksimal.");
        }

        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

try {
    const video = new SayaTubeVideo("Tutorial Design By Contract – Christian Felix Saliman Sugiono");
    video.IncreasePlayCount(100);
    video.PrintVideoDetails();

    try {
        const videoError = new SayaTubeVideo("A".repeat(101));
    } catch (err) {
        console.error("Error pada judul video:", err.message);
    }

    try {
        video.IncreasePlayCount(20000000);
    } catch (err) {
        console.error("Error pada IncreasePlayCount:", err.message);
    }

    try {
        for (let i = 0; i < 1000; i++) {
            video.IncreasePlayCount(10000000);
        }
    } catch (err) {
        console.error("Error integer overflow:", err.message);
    }
} catch (err) {
    console.error("Terjadi kesalahan:", err.message);
}

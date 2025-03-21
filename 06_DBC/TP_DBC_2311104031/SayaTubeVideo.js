class SayaTubeVideo {
    constructor(title) {
        if (!title || typeof title !== 'string') {
            throw new Error("Title harus berupa string dan tidak boleh kosong.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== 'number' || count <= 0) {
            throw new Error("Jumlah playCount harus berupa angka positif.");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

const video = new SayaTubeVideo("Tutorial Design By Contract – Christian Felix Saliman Sugiono");
video.IncreasePlayCount(100);
video.PrintVideoDetails();
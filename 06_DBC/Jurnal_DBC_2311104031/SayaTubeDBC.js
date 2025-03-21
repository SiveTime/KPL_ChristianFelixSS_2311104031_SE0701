class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0) {
            throw new Error("Judul video tidak boleh null atau kosong.");
        }
        if (title.length > 200) {
            throw new Error("Judul video tidak boleh lebih dari 200 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        try {
            if (typeof count !== "number" || count <= 0) {
                throw new Error("Jumlah play harus bilangan positif.");
            }
            if (count > 25000000) {
                throw new Error("Jumlah play count maksimal 25.000.000 per panggilan.");
            }
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Integer overflow: play count terlalu besar.");
            }

            this.playCount += count;
        } catch (error) {
            console.error(`Gagal menambahkan play count: ${error.message}`);
        }
    }

    PrintVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Jumlah Play: ${this.playCount}`);
        console.log("--------------------------------");
    }
}

class SayaTubeUser {
    constructor(username) {
        if (typeof username !== "string" || username.length === 0) {
            throw new Error("Username tidak boleh null atau kosong.");
        }
        if (username.length > 100) {
            throw new Error("Username tidak boleh lebih dari 100 karakter.");
        }

        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        try {
            if (!(video instanceof SayaTubeVideo)) {
                throw new Error("Hanya bisa menambahkan instance dari SayaTubeVideo.");
            }
            if (video.playCount >= Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count video sudah mendekati batas integer maksimum.");
            }

            this.uploadedVideos.push(video);
        } catch (error) {
            console.error(`Gagal menambahkan video: ${error.message}`);
        }
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        
        const maxVideosToPrint = Math.min(8, this.uploadedVideos.length);
        for (let i = 0; i < maxVideosToPrint; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
        console.log("--------------------------------");
    }
}

function main() {
    try {
        const user = new SayaTubeUser("Christian Felix Saliman Sugiono");

        const videoTitles = [
            "Review Film Inception oleh Christian Felix Saliman Sugiono",
            "Review Film Interstellar oleh Christian Felix Saliman Sugiono",
            "Review Film The Dark Knight oleh Christian Felix Saliman Sugiono",
            "Review Film Parasite oleh Christian Felix Saliman Sugiono",
            "Review Film Avengers: Endgame oleh Christian Felix Saliman Sugiono",
            "Review Film The Matrix oleh Christian Felix Saliman Sugiono",
            "Review Film Forrest Gump oleh Christian Felix Saliman Sugiono",
            "Review Film Fight Club oleh Christian Felix Saliman Sugiono",
            "Review Film The Shawshank Redemption oleh Christian Felix Saliman Sugiono",
            "Review Film The Godfather oleh Christian Felix Saliman Sugiono"
        ];

        videoTitles.forEach(title => {
            let video = new SayaTubeVideo(title);
            video.IncreasePlayCount(Math.floor(Math.random() * 1000));
            user.AddVideo(video);
        });

        user.uploadedVideos.forEach(video => video.PrintVideoDetails());

        user.PrintAllVideoPlaycount();

        console.log(`Total semua play count: ${user.GetTotalVideoPlayCount()}`);

        console.log("\nMengujikan Overflow Play Count...");
        let testVideo = new SayaTubeVideo("Test Overflow");
        let overflowValue = Number.MAX_SAFE_INTEGER / 2;

        for (let i = 0; i < 3; i++) {
            testVideo.IncreasePlayCount(overflowValue);
            console.log(`Percobaan ke-${i + 1}: Play Count = ${testVideo.playCount}`);
        }
    } catch (error) {
        console.error(`Error dalam eksekusi utama: ${error.message}`);
    }
}

main();
class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0 || title.length > 100) {
            throw new Error("Judul video harus berupa string dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== "number" || count <= 0) {
            throw new Error("Jumlah play harus bilangan positif.");
        }
        this.playCount += count;
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
        if (typeof username !== "string" || username.length === 0 || username.length > 100) {
            throw new Error("Username harus berupa string dan maksimal 100 karakter.");
        }
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Hanya bisa menambahkan instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
        console.log("--------------------------------");
    }
}

function main() {
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
}

main();
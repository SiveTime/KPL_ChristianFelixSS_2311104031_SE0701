class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

function main() {
    const nim = "2311104031";
    const data = new DataGeneric(nim);
    data.PrintData();
}

main();

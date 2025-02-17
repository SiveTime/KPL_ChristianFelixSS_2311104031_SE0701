import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa namamu, tuan? ", (nama) => {
    input.question("Apa jurusanmu? ", (jurusan) => {
        input.question("kuliah di kampus apa? ", (kampus) => {
            input.question("Umur berapa bang? ", (umur) => {
                console.info(`\nHallo ${nama},`);
                console.info(`Kamu dari jurusan ${jurusan}, berkuliah di ${kampus}, dan berusia ${umur} tahun.`);
                input.close();
            });
        });
    });
});

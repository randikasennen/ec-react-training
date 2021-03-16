export default function ReadFileAsDataURL(file, callback) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e) => {
        callback(e.target.result)
    }
}
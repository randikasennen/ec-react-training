export default function ReadFileAsDataURL(file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    var dataURL = null;

    await fileReader.onload = (e) => {
        dataURL = e.target.result
    }

    return dataURL;
}
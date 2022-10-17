export const uploadImage = async (file:any) => {
    const formdata = new FormData();
    formdata.append('image', file);
    let req = await fetch(`${process.env.REACT_APP_API}/images/upload`, {
        method: 'POST',
        body: formdata
    });
    let res = await req.json();
    return res;
}
const getBasic = async () => {
    const res = await fetch('@api/menu');
    return res;
}
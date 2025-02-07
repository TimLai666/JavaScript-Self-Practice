export async function getWashData() {
        const res = await fetch(
            "https://soa.tainan.gov.tw/Api/Service/Get/3d9dee2b-7852-4255-9612-52fe5121b8b4"
        );
        return await res.json();
}
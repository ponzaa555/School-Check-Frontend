
export async function getClassList() {
    const url = "http://ec2-54-226-100-182.compute-1.amazonaws.com:5274/api/Class/GetAllClass";
    console.log(url);

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    if (!res.ok) {
        const text = await res.text(); // for debugging
        throw new Error(`Failed to fetch: ${res.status} - ${text}`);
    }
    return res;
}

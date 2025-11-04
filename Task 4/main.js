async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    return jsonData;

    // eslint-disable-next-line no-useless-catch
  } catch (error) {
    throw error;
  } finally {
    console.log('done');
  }
}

const url = "https://reqres.in/api/users"
const options = {
  headers: {
    'x-api-key': 'reqres-free-v1'
  }
}

fetchData(url, options).then(result => console.log(result));

async function attemptRequest(){
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('done');
  }
}

attemptRequest();

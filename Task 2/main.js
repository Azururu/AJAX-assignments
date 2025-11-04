async function post() {
  const userData = {
    name: 'Michael',
    job: 'trucker'
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: JSON.stringify(userData)
    });

    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('done');
  }
}

post();

const axios = require('axios');
// Replace with your GitHub personal Access Token
const accessToken = 'YOUR_ACCESS_TOKEN';
async function searchHacktoberfestRepos() {
  try {
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: 'hacktoberfest',
        sort: 'stars',
        order: 'desc',
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      const repos = response.data.items;
      console.log('Top Hacktoberfest Repositories:');
      repos.forEach((repo, index) => {
        console.log(`${index + 1}. ${repo.name} - ${repo.html_url}`);
      });
    } else {
      console.error('Failed to fetch repositories. Status code:', response.status);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}
searchHacktoberfestRepos();

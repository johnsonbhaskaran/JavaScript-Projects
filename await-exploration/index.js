async function fetchUserProfiles() {
  const userIds = [1, 2, 3, 4, 5];

  userIds.forEach(async (id) => {
    const profile = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await profile.json();
    console.log(`User ${id}:`, data.name);
  });

  console.log("All done fetching users");
}

fetchUserProfiles();

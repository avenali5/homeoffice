export const getPodcasts = async () => {
  try {
    const tsv = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSsxWbPi-THgmLjDeLIUTWpufk1gY6TMaowCL77fCg6liwhu7oTxQCdE9WiNIa4XeyrbgU1tWUrTwsZ/pub?output=tsv"
    ).then(res => res.text());

    const podcasts = tsv
      .split("\n")
      .slice(1)
      .map(row => {
        const [
          id,
          slug,
          img,
          title,
          subtitle,
          tags,
          description,
          playerId,
          accentColor,
          links,
          firstEpisode,
        ] = row.split("\t");

        return {
          id,
          slug,
          img,
          title,
          subtitle,
          tags,
          description,
          playerId,
          accentColor,
          links,
          firstEpisode,
        };
      });
    return podcasts;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const filterSpaceAxios = (data) => {
    const newData = data.filter(val => val.launch_year !== '2020')
        .map(val => {
            return {
                mission_name: val.mission_name,
                launch_year: val.launch_year,
                mission_patch_small: val.links.mission_patch_small
            };
        });
    return newData;
};

export { filterSpaceAxios };
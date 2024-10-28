import { api, apiClient } from "./api";
import type { GetSearchPackagesByNameAndDescriptionParams } from "./api";

apiClient.baseUrl = "https://api.dev.corinth3d.com";
apiClient.setSecurityData('7KQwLLOl27MjB-Mlc3F3C1f5FUgt52sD4IJIwUfKyD2lwpr-cY5RLhmO9YMp-MWhxOsM23w');
// apiClient.setSecurityData('Bearer 7KQwLLOl27MjB-Mlc3F3C1f5FUgt52sD4IJIwUfKyD2lwpr-cY5RLhmO9YMp-MWhxOsM23w');
// const token = 'Bearer 7KQwLLOl27MjB-Mlc3F3C1f5FUgt52sD4IJIwUfKyD2lwpr-cY5RLhmO9YMp-MWhxOsM23w';

export async function fetchSearchResults(searchText: string) {
    const queryParams: GetSearchPackagesByNameAndDescriptionParams = {
        searchText,
        localizationId: "en-US"
    };
    
    try {
        const response = await api.search.getSearchPackagesByNameAndDescription(queryParams);

        console.log("Api response: ", response);
        return response;
    } catch (error) {
        console.error("Api error: ", error);
        throw new Error("Failed to fetch search results");
    }
}
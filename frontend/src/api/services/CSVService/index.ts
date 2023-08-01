import TechFormsApi from '../..';

class CSVService {
  private static endpoints = {
    sendFile: '/api/files',
    search: '/api/search',
  };

  public static async sendFile(payload: FormData) {
    const { data } = await TechFormsApi.post(this.endpoints.sendFile, payload);

    return data;
  }

  public static async search(query: string) {
    const { data } = await TechFormsApi.get(this.endpoints.search, {
      params: { q: query },
    });

    return data;
  }
}

export default CSVService;

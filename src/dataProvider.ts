
import simpleRestDataProvider from "ra-data-simple-rest";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";

// i write this for get id in localstorge in react and send it to backend
const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
      new Headers({
          Accept: 'application/json',
      })) as Headers;    
  // add your own headers here    
  const user_id = JSON.parse(localStorage.getItem('auth')).id
  customHeaders.set('user', user_id);
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
}  

const endpoint = "https://ashion.liara.run";
const baseDataProvider = simpleRestDataProvider(endpoint,httpClient);


type ProductParams = {
  id: string;
  category_id: string;
  name: string;
  description: string;
  price: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createProductFormData = (
  
  params: CreateParams<ProductParams> | UpdateParams<ProductParams>
) => {
  const formData = new FormData();
  params.data.category_id && formData.append("category_id", params.data.category_id);
  params.data.name && formData.append("name", params.data.name);
  params.data.description && formData.append("description", params.data.description);
  params.data.price && formData.append("price", params.data.price);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);
  return formData;
};

export const dataProvider: DataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === "product") {
      const formData = createProductFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers:new Headers({"user":JSON.parse(localStorage.getItem('auth')).id})
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.create(resource, params);
  },
  update: (resource, params) => {
    if (resource === "product") {
      const formData = createProductFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers:new Headers({"user":JSON.parse(localStorage.getItem('auth')).id})
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.update(resource, params);
  },
  
};

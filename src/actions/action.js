import axiosInstance from "../utility/axios_interceptor";
import { secure_routes } from "../utility/api_config";
import {
  setFAQList,
  setTags,
  setVideoServies,
  updateLng,
} from "../reducers/reducer";

// Get all frequently asked questions list
export const getFAQsList = (lng) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(
        `${secure_routes.getFAQs}?language=${lng}`
      );
      if (data) {
        dispatch(setFAQList(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Get course related tags
export const getCousestags = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(secure_routes.getCoursesTags);
      if (data) {
        dispatch(setTags(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Getting respected videos servies based on the selecte item
export const getVideoSeriesList = (lng) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.get(
        `${secure_routes.getCourseSeries}?language=${lng}`
      );
      if (data) {
        dispatch(setVideoServies(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//  Update the selecte language
export const setSelectedLng = (lng) => {
  return (dispatch) => {
    dispatch(updateLng(lng));
  };
};

import {
  Weather,
  WeatherActionsType,
  GET_WEATHER,
  LOADING,
  SET_WEATHER_ERROR,
  CLEAR_WEATHER_ERROR,
} from './types';

export const initialWeatherState: Weather = {
  loading: true,
  error: '',
  timezone_offset: 0,
  current: {
    temp: 296.66,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
  daily: [
    {
      dt: 343434,
      temp: {
        day: 301.4,
        min: 295.71,
        max: 304.09,
        night: 295.71,
      },
      humidity: 76,
      wind_speed: 3.8,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
    },
  ],
};

export default (state = initialWeatherState, action: WeatherActionsType) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...action.payload,
        loading: false,
        error: '',
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_WEATHER_ERROR:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

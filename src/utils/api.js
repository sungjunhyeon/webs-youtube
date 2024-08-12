import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'; // API의 기본 URL을 설정

const options = {
    params: {
        maxResults: 48, // 한 번에 가져올 최대 결과 수 설정
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // API 인증을 위한 키
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', // API 호스트 정보
    },
};

export const fetchFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error.message);
        if (error.response) {
            console.error('응답 상태 코드:', error.response.status);
        }
    }
};
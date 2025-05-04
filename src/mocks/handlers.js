import { http, HttpResponse } from 'msw'
import data from "../../assets/data/events.json";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('schedule.json', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
        data
    )
  }),
]

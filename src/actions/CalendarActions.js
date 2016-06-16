import { CALENDAR_EVENTS } from './types';

export function fetchEvents() {
  return {
    type: CALENDAR_EVENTS,
    payload: events
  }
}

const events = [
  {
  "summary": "Meeting with the board of directors",
  "description": "Meeting with the board of directors",
  "updated": "Jan 9, 2014",
  "timeZone": "GMT",
  "completed": false
  },
  {
  "summary": "Meeting with the board of directors",
  "description": "Meeting with the board of directors",
  "updated": "Jan 9, 2014",
  "timeZone": "GMT",
  "completed": true
  },
  {
  "summary": "Meeting with the board of directors",
  "description": "Meeting with the board of directors",
  "updated": "Jan 9, 2014",
  "timeZone": "GMT",
  "completed": true
  },
  {
  "summary": "Meeting with the board of directors",
  "description": "Meeting with the board of directors",
  "updated": "Jan 9, 2014",
  "timeZone": "GMT",
  "completed": true
  },
  {
  "summary": "Meeting with the board of directors",
  "description": "Meeting with the board of directors",
  "updated": "Jan 9, 2014",
  "timeZone": "GMT",
  "completed": true
  }
]

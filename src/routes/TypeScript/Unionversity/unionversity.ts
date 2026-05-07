import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: 'course';
}

type StudyGroup = {
    id: number,
    courseId: number,
    title: string;
    keywords: string[];
    eventType: 'group';
}

type SearchEventsOptions = {
    query: string;
    eventType: 'course' | 'group';
}

function searchEvents(options: SearchEventsOptions) {
    const events = options.eventType === 'course' ? courses : studyGroups;
     

}   
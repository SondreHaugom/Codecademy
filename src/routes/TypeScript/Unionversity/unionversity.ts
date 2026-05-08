import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type StudyGroup = {
    id: number,
    courseId: number,
    title: string;
    keywords: string[];
    eventType: string;
}

type SearchEventsOptions = {
    query: string;
    eventType: 'courses' | 'groups';
}

function searchEvents(options: SearchEventsOptions) {
    const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
    events.filter((event: Course | StudyGroup) => {})

    
    return events.filter((event: Course | StudyGroup) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    })

}   
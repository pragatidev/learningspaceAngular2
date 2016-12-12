const COURSES: Course[] = [{
        id: 0,
        title: 'A Great Course',
        price: 75.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, ' +
        'quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, ' +
        'odit odio velit eius incidunt dignissimos.',
        categories: ['angular']
    },
    {
        id: 1,
        title: 'A Super Course',
        price: 65.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['typescript']
    },
    {
        id: 2,
        title: 'An Awesome Course',
        price: 95.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['javascript']
    },
    {
        id: 3,
        title: 'An Amazing Course',
        price: 125.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['angular', 'node']
    },
    {
        id: 4,
        title: 'An Okay Course',
        price: 45.00,
        description: 'This is a course description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus ' +
        'id illo ad fugit, odit odio velit eius incidunt dignissimos.',
        categories: ['react']
    }];

export class Course {
        id: number;
        title: string;
        price: number;
        description: string;
        categories: string[];
}

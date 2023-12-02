// db.js

const db = {
    professors: [
        {
            id: 1,
            nombre: "Juan Pérez",
            username: "juanperez",
            password: "contrasena1",
        },
        {
            id: 2,
            nombre: "María Rodríguez",
            username: "mariarodriguez",
            password: "contrasena2",
        },
        {
            id: 3,
            nombre: "Carlos López",
            username: "carloslopez",
            password: "contrasena3",
        },
        {
            id: 4,
            nombre: "Ana Martínez",
            username: "anamartinez",
            password: "contrasena4",
        },
        {
            id: 5,
            nombre: "Laura García",
            username: "lauragarcia",
            password: "contrasena5",
        },
    ],
    classrooms: [
        { classroom_id: "A", capacity: 30 },
        { classroom_id: "B", capacity: 25 },
        { classroom_id: "C", capacity: 50 },
        ,
    ],
    reservations: [
        {
            start_time: "2023-12-04T09:00:00Z",
            end_time: "2023-12-04T10:00:00Z",
            classroom_id: "A",
            subject_id: 1,
            professor_id: 1,
        },
        {
            start_time: "2023-12-05T09:00:00Z",
            end_time: "2023-12-05T10:00:00Z",
            classroom_id: "A",
            subject_id: 1,
            professor_id: 1,
        },
        {
            start_time: "2023-12-05T09:00:00Z",
            end_time: "2023-12-05T10:00:00Z",
            classroom_id: "B",
            subject_id: 2,
            professor_id: 2,
        },
        {
            start_time: "2023-12-05T09:00:00Z",
            end_time: "2023-12-05T10:00:00Z",
            classroom_id: "C",
            subject_id: 3,
            professor_id: 3,
        },
    ],
    subjects: [
        { subject_id: 1, name: "Mathematics" },
        { subject_id: 2, name: "Physics" },
        { subject_id: 3, name: "Biology" },
        { subject_id: 4, name: "History" },
        { subject_id: 5, name: "Computer Science" },
    ],
};

console.log(JSON.stringify(db));

module.exports = db;

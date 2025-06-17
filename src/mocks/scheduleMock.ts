import type {ScheduleSessionDto} from "../types/ScheduleSessionDto";

export const scheduleMock: ScheduleSessionDto[] = [
    {
        sessionId: "1",
        adventureId: "a1",
        adventureTitle: "Phandelver Mines",
        type: "MULTISHOT",
        gameSystem: "DnD 5e",
        dm: { name: "Andrei", bio: "Любит рояли в кустах" },
        startTime: "2025-06-25T19:00:00+02:00",
        durationHours: 4,
        minPlayers: 3,
        maxPlayers: 5,
        description: "Краткое описание. Вечерняя сессия для всех уровней!",
        signupLink: "https://t.me/yourChannelOrAdmin?text=Привет!%20Хочу%20записаться...",
    },
    {
        sessionId: "2",
        adventureId: "a2",
        adventureTitle: "OneShot: Goblin Heist",
        type: "ONESHOT",
        gameSystem: "DnD 5e",
        dm: { name: "Maria", bio: "Специалист по шуткам и квестам" },
        startTime: "2025-06-28T18:30:00+02:00",
        durationHours: 3,
        minPlayers: 4,
        maxPlayers: 6,
        description: "Тихий городок Фандалин хранит в себе секреты настоящих богатств. \nА там где золото, окажется куча желающих его присвоить. Любыми методами. Нанимаясь на обычное задание по сопровождению повозки, вы не подозревали, что оно перерастёт в приключение всей вашей жизни. Готовьтесь к смертоносным схваткам с гоблинами (да, вы же первоуровневые 😈), исследованию подземелий и поиску сокровищ 💰. Фандалин нуждается в героях. Возможно, вы те самые, кто вернет городу былую славу и разгадает тайну рудников Фанделвера.",
        signupLink: null, // Мест нет!
    },
];

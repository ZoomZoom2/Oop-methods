export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.length <= 2) {
            throw new Error('Имя должно быть длиной более 2 символов');
        }
        if (name.length > 10) {
            throw new Error('Имя должно быть длиной менее 10 символов');
        }
        if (!types.includes(type)) {
            throw new Error('Нет такого типа персонажа');
        }

        this.health = 100;
        this.level = 1;
        this.type = type;
        this.name = name;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Персонаж мертв');
        }

        this.level++;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

import { Model, Sequelize } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha_hash: sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default Usuario;

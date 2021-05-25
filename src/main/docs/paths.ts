import { personPath, loadPersonByCpfPath } from './paths/index';

export default {
  '/persons': personPath,
  '/persons/{cpf}': loadPersonByCpfPath
}
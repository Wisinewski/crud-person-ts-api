import { loadPersonByCpfPath } from './paths/load-person-by-cpf-path';
import { personPath } from './paths/index';

export default {
  '/persons': personPath,
  '/persons/{cpf}': loadPersonByCpfPath
}
import {sum} from './math'
import { domPrint } from './utils/domPrint';

const root=document.getElementById('root')
root.innerHTML='Hello Typescript, 欢迎学习Typescript!'


domPrint(sum(4,5),':::')
domPrint([1,2,3,4])



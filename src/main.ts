import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1 a)

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesAsignadosAPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  }

  return pacientesAsignadosAPediatria;
};

const pacientesAsignadosAPediatria =
  obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesAsignadosAPediatria);

// Apartado 1 b)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatriaYMenorDeDiezAnios;
};

const pacientesAsignadosAPediatriaYMenoresDeDiezAnios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesAsignadosAPediatriaYMenoresDeDiezAnios);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39)
      activarProtocolo = true;
    break;
  }

  return activarProtocolo;
};

const protocoloUrgencia = activarProtocoloUrgencia(pacientes);
console.log("Activación del protocolo de urgencia = ", protocoloUrgencia);

//Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let coleccionActualizadaPacientes: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    let pacienteActualizado = pacientes[i];
    if (pacientes[i].especialidad === "Pediatra") {
      pacienteActualizado = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
    }

    coleccionActualizadaPacientes.push(pacienteActualizado);
  }

  return coleccionActualizadaPacientes;
};

const muestraPacientesReasignadosAMedicoFamilia =
  reasignaPacientesAMedicoFamilia(pacientes);
console.log(muestraPacientesReasignadosAMedicoFamilia);

//Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let requeridoPediatra = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      requeridoPediatra = true;
      break;
    }
  }

  return requeridoPediatra;
};

const esRequeridoElPediatra = hayPacientesDePediatria(pacientes);
console.log(
  "Hay pacientes de pediatría y se requiere la presencia del pediatra = ",
  esRequeridoElPediatra
);

//Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  let numeroPacientesMedicoDeFamilia = 0;
  let numeroPacientesPediatria = 0;
  let numeroPacientesCardiologia = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      numeroPacientesMedicoDeFamilia += 1;
      pacientesPorEspecialidad.medicoDeFamilia = numeroPacientesMedicoDeFamilia;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      numeroPacientesPediatria += 1;
      pacientesPorEspecialidad.pediatria = numeroPacientesPediatria;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      numeroPacientesCardiologia += 1;
      pacientesPorEspecialidad.cardiologia = numeroPacientesCardiologia;
    }
  }

  return pacientesPorEspecialidad;
};

const muestraPacientesPorEspecialidad =
  cuentaPacientesPorEspecialidad(pacientes);
console.log(muestraPacientesPorEspecialidad);

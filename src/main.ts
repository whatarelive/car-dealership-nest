import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



// Punto de inicio de nuestro servicio. 
async function main() {
  // Creacion de nuestro servicio.
  const app = await NestFactory.create(AppModule);
  // Se monta nuestro servicio en el puerto: 3000.
  await app.listen(3000);
}

main();

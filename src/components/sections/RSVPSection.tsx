import React from 'react';
import {
  RadioGroup,
  RadioGroupItem,
  Label,
  Input,
  Textarea,
  Button,
} from '../ui/index';
import { Confirm, Divider } from '../svg';
import { Purple_Purse } from 'next/font/google';

const purplePurse = Purple_Purse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

interface RSVPSectionProps {
  asistencia: string;
  setAsistencia: (value: string) => void;
  invitados: string;
  setInvitados: (value: string) => void;
  restricciones: string;
  setRestricciones: (value: string) => void;
  comentarios: string;
  setComentarios: (value: string) => void;
  handleEnviarWhatsapp: () => void;
  isFormValid: boolean;
}

export function RSVPSection({
  asistencia,
  setAsistencia,
  invitados,
  setInvitados,
  restricciones,
  setRestricciones,
  comentarios,
  setComentarios,
  handleEnviarWhatsapp,
  isFormValid,
}: RSVPSectionProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center pt-16 pb-8"
      aria-labelledby="rsvp-title"
    >
      <div className="w-full max-w-[360px] mx-[15px] px-5 lg:px-0">
        <header className="section-content">
          <div
            className="flex justify-center mb-12"
            role="img"
            aria-label="Ícono de confirmación"
          >
            <div className="svg-icon-responsive">
              <Confirm />
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="font-quando text-[#626262] text-lg">Solo necesito</p>
            <div className="mt-4">
              <h2
                id="rsvp-title"
                className={`${purplePurse.className} text-[#8164C1] text-4xl`}
              >
                CONFIRMAR TU ASISTENCIA
              </h2>
            </div>
          </div>
        </header>

        <fieldset className="section-content mb-8">
          <legend className="sr-only">Selecciona tu asistencia</legend>
          <RadioGroup
            value={asistencia}
            onValueChange={setAsistencia}
            className="radio-mobile-stack flex flex-row w-full gap-1"
            role="radiogroup"
            aria-label="Confirmación de asistencia"
          >
            <div className="flex-1 flex items-center justify-start space-x-2">
              <RadioGroupItem
                value="Si, confirmo!"
                id="si"
                className="w-5 h-5"
                aria-describedby="si-description"
              />
              <Label
                htmlFor="si"
                className="whitespace-nowrap font-quando text-[#626262] text-base"
              >
                Si, confirmo!
              </Label>
            </div>
            <div className="flex-1 flex items-center justify-start space-x-2">
              <RadioGroupItem
                value="No puedo ir :("
                id="no"
                className="w-5 h-5"
                aria-describedby="no-description"
              />
              <Label
                htmlFor="no"
                className="whitespace-nowrap font-quando text-[#626262] text-base"
              >
                No puedo ir :(
              </Label>
            </div>
          </RadioGroup>
        </fieldset>

        {asistencia !== 'No puedo ir :(' && (
          <form
            className="section-content space-y-12 mb-8 mt-12"
            onSubmit={e => e.preventDefault()}
            aria-label="Formulario de confirmación de asistencia"
          >
            <div>
              <Label
                htmlFor="nombres"
                className="mb-2 block font-quando text-[#626262] text-sm"
              >
                Nombre(s) y apellido(s)
              </Label>
              <Textarea
                id="nombres"
                placeholder=""
                value={invitados}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setInvitados(e.target.value)
                }
                className="form-input-custom min-h-[40px] max-h-[50vh] resize-none placeholder:text-transparent font-quando text-[#626262] font-semibold"
                required
                aria-describedby="nombres-help"
                aria-required="true"
              />
              <p id="nombres-help" className="form-helper-text text-left mt-1">
                Si son más de una persona, separá el nombre y apellido de cada
                una con coma (,)
              </p>
            </div>

            <div>
              <Label
                htmlFor="restricciones"
                className="mb-2 block font-quando text-[#626262] text-sm"
              >
                Restricción alimenticia (opcional)
              </Label>
              <Input
                id="restricciones"
                placeholder=""
                value={restricciones}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRestricciones(e.target.value)
                }
                className="form-input-custom h-10 placeholder:text-transparent font-quando text-[#626262] font-semibold"
                aria-describedby="restricciones-help"
              />
              <p
                id="restricciones-help"
                className="form-helper-text text-left mt-1"
              >
                Ej: Vegetariano, Celíaco, Vegano.
              </p>
            </div>

            <div>
              <Label
                htmlFor="comentarios"
                className="mb-2 block font-quando text-[#626262] text-sm"
              >
                Otros comentarios (opcional)
              </Label>
              <Input
                id="comentarios"
                placeholder=""
                value={comentarios}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setComentarios(e.target.value)
                }
                className="form-input-custom h-10 placeholder:text-transparent font-quando text-[#626262] font-semibold"
                aria-describedby="comentarios-help"
              />
              <p
                id="comentarios-help"
                className="form-helper-text text-left mt-1"
              >
                Cualquier información adicional que quieras compartir
              </p>
            </div>
          </form>
        )}

        <div
          className={`section-content flex justify-center ${asistencia === 'No puedo ir :(' ? 'mt-12' : 'mt-0'}`}
        >
          <Button
            onClick={handleEnviarWhatsapp}
            disabled={!isFormValid}
            variant="outline"
            className={`h-12 px-6 border-[#626262] bg-transparent hover:bg-[#f8f4f6] active:bg-[#f0e8ed] text-[#626262] font-quando text-sm tracking-[0.1em] uppercase ${
              !isFormValid ? 'opacity-50 pointer-events-none' : ''
            }`}
            aria-describedby="button-help"
            aria-disabled={!isFormValid}
          >
            Enviar por Whatsapp
          </Button>
        </div>

        <footer
          className="flex justify-center mt-12 mb-12"
          role="img"
          aria-label="Separador decorativo"
        >
          <div className="svg-icon-responsive">
            <Divider />
          </div>
        </footer>
      </div>
    </section>
  );
}

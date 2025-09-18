import React from 'react';
import {
  RadioGroup,
  RadioGroupItem,
  Label,
  Input,
  Textarea,
  Button,
} from '../ui/index';

interface RSVPSectionProps {
  asistencia: string;
  setAsistencia: (value: string) => void;
  invitados: string;
  setInvitados: (value: string) => void;
  restricciones: string;
  setRestricciones: (value: string) => void;
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
  handleEnviarWhatsapp,
  isFormValid,
}: RSVPSectionProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
        <div className="section-content">
          <div className="flex justify-center mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="1"
              viewBox="0 0 145 1"
              fill="none"
            >
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
              <path d="M0 0H145V1H0V0Z" fill="#E5E2EF" opacity="0.14" />
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.1" />
            </svg>
          </div>

          <div className="text-center mb-12">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '18px',
              }}
            >
              Solo necesito
            </p>
            <div className="mt-4">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#A897CE',
                  fontSize: '36px',
                }}
              >
                CONFIRMAR TU ASISTENCIA
              </h2>
            </div>
          </div>
        </div>

        <div className="section-content mb-8">
          <RadioGroup
            value={asistencia}
            onValueChange={setAsistencia}
            className="radio-mobile-stack flex flex-row w-full gap-4"
          >
            <div className="flex-1 flex items-center justify-center space-x-2">
              <RadioGroupItem
                value="Si, confirmo!"
                id="si"
                className="w-5 h-5"
              />
              <Label
                htmlFor="si"
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '16px',
                }}
              >
                Si, confirmo!
              </Label>
            </div>
            <div className="flex-1 flex items-center justify-center space-x-2">
              <RadioGroupItem
                value="No puedo ir :("
                id="no"
                className="w-5 h-5"
              />
              <Label
                htmlFor="no"
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '16px',
                }}
              >
                No puedo ir
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div
          className="section-content space-y-12 mb-8"
          style={{ marginTop: '32px' }}
        >
          <div>
            <Label
              htmlFor="nombres"
              className="mb-2 block"
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '14px',
              }}
            >
              Nombres y apellidos
            </Label>
            <Textarea
              id="nombres"
              placeholder=""
              value={invitados}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setInvitados(e.target.value)
              }
              className="form-input-custom min-h-[40px] max-h-[50vh] resize-none placeholder:text-transparent"
              style={{ fontFamily: 'Quando, serif', color: '#626262' }}
              required
            />
            <p className="form-helper-text text-left mt-1">
              Si son más de una persona, separá el nombre y apellido de cada una
              con coma (,)
            </p>
          </div>

          <div>
            <Label
              htmlFor="restricciones"
              className="mb-2 block"
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '14px',
              }}
            >
              Restricción alimenticia
            </Label>
            <Input
              id="restricciones"
              placeholder=""
              value={restricciones}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRestricciones(e.target.value)
              }
              className="form-input-custom h-10 placeholder:text-transparent"
              style={{ fontFamily: 'Quando, serif', color: '#626262' }}
            />
            <p className="form-helper-text text-left mt-1">
              Ej: Vegetariano, Celíaco, Vegano.
            </p>
          </div>

          <div className="section-content flex justify-center">
            <Button
              onClick={handleEnviarWhatsapp}
              disabled={!isFormValid}
              variant="outline"
              className={`h-12 px-6 border-[#626262] bg-transparent hover:bg-[#f8f4f6] active:bg-[#f0e8ed] text-[#626262] font-normal tracking-[0.1em] uppercase ${
                !isFormValid ? 'opacity-50 pointer-events-none' : ''
              }`}
              style={{
                fontFamily: 'Quando, serif',
                fontSize: '14px',
              }}
            >
              Enviar por Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

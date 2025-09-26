import React from 'react';
import {
  RadioGroup,
  RadioGroupItem,
  Label,
  Input,
  Textarea,
  Button,
  GlassCard,
} from '../ui/index';
import { Confirm, Divider } from '../svg';

interface RSVPSectionProps {
  asistencia: string;
  setAsistencia: (value: string) => void;
  invitados: string;
  setInvitados: (value: string) => void;
  restricciones: string;
  setRestricciones: (value: string) => void;
  otrasIndicaciones: string;
  setOtrasIndicaciones: (value: string) => void;
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
  otrasIndicaciones,
  setOtrasIndicaciones,
  handleEnviarWhatsapp,
  isFormValid,
}: RSVPSectionProps) {
  return (
    <div className="min-h-[100vh] flex items-center justify-center py-12">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-container-desktop">
        <GlassCard className="p-8 glass-card-desktop">
          <div className="section-content">
            <div className="flex justify-center mb-12">
              <div className="svg-icon-responsive">
                <Confirm />
              </div>
            </div>

            <div className="text-center mb-12">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#FFFFFF',
                  fontSize: '18px',
                }}
              >
                Solo necesito
              </p>
              <div className="mt-4">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
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
                    color: '#FFFFFF',
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
                    color: '#FFFFFF',
                    fontSize: '16px',
                  }}
                >
                  No puedo ir :(
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div
            className="section-content space-y-12 mb-8"
            style={{ marginTop: '32px' }}
          >
            <div>
              <div className="form-group">
                <label
                  htmlFor="nombres"
                  className="form-label"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Nombre y apellido
                </label>
                <Textarea
                  id="nombres"
                  placeholder="Escribe tu nombre y apellido..."
                  value={invitados}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInvitados(e.target.value)
                  }
                  className="w-full min-h-[40px] max-h-[50vh] resize-none"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    backgroundColor: 'transparent',
                    border: '1px solid #FFFFFF',
                    borderRadius: '8px',
                    padding: '12px',
                    outline: 'none',
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <div className="form-group">
                <label
                  htmlFor="restricciones"
                  className="form-label"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Restricción alimenticia
                </label>
                <Input
                  id="restricciones"
                  placeholder="Ej: Vegetariano, Celíaco, Vegano..."
                  value={restricciones}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRestricciones(e.target.value)
                  }
                  className="w-full h-10"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    backgroundColor: 'transparent',
                    border: '1px solid #FFFFFF',
                    borderRadius: '8px',
                    padding: '12px',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Campo "Otras indicaciones" - Solo se muestra si la asistencia está confirmada */}
            {asistencia === 'Si, confirmo!' && (
              <div>
                <div className="form-group">
                  <label
                    htmlFor="otrasIndicaciones"
                    className="form-label"
                    style={{
                      fontFamily: 'Quando, serif',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    Otras indicaciones
                  </label>
                  <Input
                    id="otrasIndicaciones"
                    placeholder="Ej: Llegar tarde, traer algo específico..."
                    value={otrasIndicaciones}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setOtrasIndicaciones(e.target.value)
                    }
                    className="w-full h-10"
                    style={{
                      fontFamily: 'Quando, serif',
                      color: '#FFFFFF',
                      backgroundColor: 'transparent',
                      border: '1px solid #FFFFFF',
                      borderRadius: '8px',
                      padding: '12px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            )}

            <div className="section-content flex justify-center">
              <Button
                onClick={handleEnviarWhatsapp}
                disabled={!isFormValid}
                variant="outline"
                className={`h-12 px-6 border-[#FFFFFF] bg-transparent hover:bg-white/20 active:bg-white/30 text-[#FFFFFF] font-normal tracking-[0.1em] uppercase ${
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

            <div className="flex justify-center mb-12">
              <div className="svg-icon-responsive">
                <Divider />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

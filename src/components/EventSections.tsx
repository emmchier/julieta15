import React from 'react';
import {
  RadioGroup,
  RadioGroupItem,
  Label,
  Input,
  Textarea,
  Button,
} from './ui/index';

interface EventSectionsProps {
  asistencia: string;
  setAsistencia: (value: string) => void;
  invitados: string;
  setInvitados: (value: string) => void;
  restricciones: string;
  setRestricciones: (value: string) => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  handleEnviarWhatsapp: () => void;
  isFormValid: boolean;
}

export function EventSections({
  asistencia,
  setAsistencia,
  invitados,
  setInvitados,
  restricciones,
  setRestricciones,
  timeLeft,
  handleEnviarWhatsapp,
  isFormValid,
}: EventSectionsProps) {
  return (
    <>
      {/* Section 3 - Location */}
      <div className="h-[100vh] flex items-center justify-center relative">
        <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
          <div className="section-content text-center">
            <div className="flex justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="1"
                viewBox="0 0 145 1"
                fill="none"
              >
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
                <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.12" />
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.09" />
              </svg>
            </div>

            <div className="mb-8">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '18px',
                }}
              >
                El lugar
              </p>
              <div className="my-2">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '36px',
                  }}
                >
                  DARWIN 1351 | CABA
                </h2>
              </div>
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '20px',
                }}
              >
                de 21:00 a 5:00 h
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="1"
                viewBox="0 0 145 1"
                fill="none"
              >
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
                <path d="M0 0H145V1H0V0Z" fill="#E5E2EF" opacity="0.11" />
                <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.13" />
              </svg>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  window.open(
                    'https://maps.app.goo.gl/6cpaVBF1th89nX137',
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                className="h-12 px-6 border-[#626262] bg-transparent hover:bg-[#f8f4f6] active:bg-[#f0e8ed] text-[#626262] font-normal tracking-[0.1em] uppercase"
                style={{
                  fontFamily: 'Quando, serif',
                  fontSize: '14px',
                }}
              >
                Ver ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Dress Code */}
      <div className="h-[100vh] flex items-center justify-center relative">
        <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
          <div className="section-content text-center">
            <div className="flex justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="1"
                viewBox="0 0 145 1"
                fill="none"
              >
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.13" />
                <path d="M0 0H145V1H0V0Z" fill="#E5E2EF" opacity="0.08" />
              </svg>
            </div>

            <div className="mb-8">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '18px',
                }}
              >
                Dress code
              </p>
              <div className="my-2">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '36px',
                  }}
                >
                  ELEGANTE SPORT
                </h2>
              </div>
            </div>

            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="1"
                viewBox="0 0 145 1"
                fill="none"
              >
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
                <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.1" />
                <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.12" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 - RSVP Form */}
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
                Si son más de una persona, separá el nombre y apellido de cada
                una con coma (,)
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
              <button
                onClick={handleEnviarWhatsapp}
                disabled={!isFormValid}
                className={`
                  h-12 px-6 rounded-lg border border-[#b8809a] bg-transparent 
                  hover:bg-[#f8f4f6] active:bg-[#f0e8ed]
                  ${!isFormValid ? 'opacity-50 pointer-events-none' : ''}
                  transition-colors duration-200
                `}
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Enviar por Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 - Countdown */}
      <div className="h-[100vh] flex items-center justify-center">
        <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
          <div className="section-content text-center">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '18px',
              }}
              className="mb-8"
            >
              Contando los días
            </p>

            <div className="counter-mobile-grid flex gap-2 w-full">
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#626262',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  días
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#626262',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  hs
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#626262',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  min
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#E5DDFC] px-2 pt-2 pb-2 flex flex-col items-center justify-between">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#A897CE',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#626262',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  seg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 - Closing */}
      <div className="h-[100vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 svg-scale-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="87"
            viewBox="0 0 251 109"
            fill="none"
          >
            <path
              d="M230.629 90.1534C229.559 90.1534 228.49 89.886 227.554 89.2174C224.345 87.2117 223.542 78.7878 223.542 71.1661C223.542 67.1547 223.81 63.4108 223.943 61.0039C221.403 69.1604 218.06 79.0552 214.316 79.5901L213.246 79.7238C207.096 79.7238 205.491 72.5033 205.491 66.4862L205.625 63.1433C206.293 56.0566 210.037 44.0224 218.06 44.0224L219.798 44.1561C221.938 44.5572 224.077 46.2955 225.281 48.1675L225.815 45.6269C226.216 44.1561 228.088 43.2201 229.96 43.2201C231.966 43.2201 233.972 44.2898 233.972 46.5629L233.838 47.0978C233.571 49.6383 231.298 67.2885 231.298 78.7878C231.298 81.3283 231.431 83.6015 231.699 85.3397C231.832 86.8106 232.234 87.8803 232.501 87.8803C237.448 86.2757 245.739 62.6085 248.948 56.1903C249.215 55.7891 249.483 55.6554 249.884 55.6554C250.151 55.6554 250.82 55.9228 250.82 56.5914C250.82 56.5914 250.82 56.8588 250.686 57.1263C247.209 64.2131 239.187 87.8803 233.036 89.7523C232.234 90.0197 231.431 90.1534 230.629 90.1534ZM214.049 77.7181C217.659 77.7181 223.275 55.9228 224.746 51.5103C224.345 50.1732 223.676 48.9698 222.74 48.0338C221.804 47.2315 220.868 46.5629 219.665 46.1618C216.857 47.7663 213.246 66.3525 213.246 74.3752C213.246 75.8461 213.38 77.0495 213.647 77.5844L214.049 77.7181Z"
              fill="#A897CE"
            />
          </svg>
        </div>

        <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
          <div className="section-content text-center">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '16px',
              }}
            >
              Te espero para compartir una noche mágica.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

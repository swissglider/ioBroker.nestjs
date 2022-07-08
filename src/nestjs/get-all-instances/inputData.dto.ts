import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class InputDataDto {
    @ApiProperty({
        description: `IBroker Instance that the command should be called`,
        example: 'system.adapter.admin.0',
    })
    @IsNotEmpty()
    @IsString()
    instance!: string;

    @ApiProperty({
        description: `command that will be called on the ioBroker's instance`,
        example: 'autocomplete',
    })
    @IsNotEmpty()
    @IsString()
    command!: string;

    @ApiProperty({
        description: `message to send to the command`,
        example: { name: 'Herbert', age: 45 },
    })
    @IsOptional()
    @IsObject()
    message: any;

    @ApiProperty({
        description: `timeout standard = 5000 (ms)`,
        example: '2000',
    })
    @IsOptional()
    @IsNumber()
    timeout!: number;
}

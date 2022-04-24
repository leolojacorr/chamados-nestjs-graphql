import { Test, TestingModule } from '@nestjs/testing';
import { ChamadosResolver } from './chamados.resolver';
import { ChamadosService } from './chamados.service';

describe('ChamadosResolver', () => {
  let resolver: ChamadosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChamadosResolver, ChamadosService],
    }).compile();

    resolver = module.get<ChamadosResolver>(ChamadosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

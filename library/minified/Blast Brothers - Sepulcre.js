Q=27.56,D=26.02,E=23.17,F=21.87,G=19.49,A=17.36,J=16.39,r=13,R=A*2,S=9E3,C=t/S&1023,c=t/S,V=24,i=12,W=32,Z=31,a=[D,,F,,A,,G,,Q,,F,,F/2,,G,F,A*2,,F,,A,,G,,J*2,,F,,J/2,,A/2,,],e=a.length,L=C/e,p=a[C%e],P=a[(C%e-3)&(e-1)]+0.01,b=[D,D,F,E,D,D,R,A,D,D,F,G,D,D,R,,D,r,F/2,A/2,r,D,R,A,r,A,F/2,G/2,r,Q/2,A,,D,F,A,G,Q,F,F/2,G,R,F,A,G,J*2,F,J/2,A/2,D,E,F,,D,Q,R,,D,r,F,,Q,E,A,,],l=b.length,x=b[(C+4>>3)%l],y=b[(C>>3)%l],z=b[(C-4>>3)%l],N=min((t/S*4)&15,8)/8,X=x==null,x=X?y*2:x,x=(x==y)?x-sin(c*6)/2E4:y+(x-y)*N,Y=y==null,y=(Y?z*2:y),y=y==z?y:z+(y-z)*N,pw=1+sin(C)*30,w=(2^C/8)&3,s=4,c=1,(p/pw+tan(t/2/p)&min(C/3,27))+((P/pw+tan(t/2/P))&min(C/6,11))+(L>=4?72>>((L>=8&&L<=28?2+2*(C>>2&1):2)*t/PI/(a[(C>>4%(e/3))&6]*(2**w)+(t&c)/s)<<w):0)+(L>=i?(((sin(t/(192+(sqrt(90/(t/S*4%16))/64)))+1)*((-C*8+Z)&Z))+(random()*(-(t/S)*W&(15-9*sin(C*29))))+((tan((t/(4+((((t/S)*8)+W)&(45+(C/8&3))))^t/S*128)))&(-C*8+Z)&Z)):0)+(L>=16&&L<=W?(((sin(t*2/x)-1)&(X?(V-(V*N)):V))+((sin(t*2/y)-1)&(Y?(i-(i*N)):i))):0)
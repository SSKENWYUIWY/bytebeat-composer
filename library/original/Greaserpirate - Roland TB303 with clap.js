t?(z=q+q/(1-f),i=(t/s*10+3)%32,n=2**(('01100001100001100110001001001001'[i|0]*12+5)/12),n=0.5-(n*t/s*55%1),k=e,e='10100010100010100010100010100010'[i*2%32|0],v(1/s,.05,.5,.2),f=h(m*(cos(t/s/32*5*p+p)/3+.4),.01),a+=f*(n-a+z*(a-b)),b+=f*(a-b),c+=f*(b-c),d+=f*(c-d),S=atan(d*p)/p,D=sin(t/140)*(40/((t/100)%128))**.5+cos(t%7)*min(3,.1/(o=((t/400)%8),o>3?9e9:o))/2,

//D=sin(t/140)*(40/((t/100)%128))**.5+cos(t%7)*min(3,.1/(o=((t/400)%8),o>3?9e9:o<1?.1*o**.1:o))/2,

T_=t/s_*4.2,b_=c_,c_=(54613>>T_%16)%2*(1-(T_*2&1)),c_-b_>0?A_=0:A_+=1/s_,o_=p_,p_=(T_-.02|0)%4>>1,p_-o_>0?B_=0:B_+=1/s_,k_=max(2e3/(1+A_*6e2),31),a_=(a_+k_/s_)%1,d_=8e-3,h_=q_+q_/(1-z_),z_=.5-.3*(1-1/(1+B_*35)),i_=random()*2-1,e_+=z_*(i_-e_+h_*(e_-f_)),f_+=z_*(e_-f_),g_+=z_*(f_-g_),j_=(f_-g_)*(B_<d_?2*v_(B_,d_):B_<d_*2?.9*v_(B_-d_,d_):B_<d_*3?v_(B_-d_*2,d_):v_(B_-d_*3,.11)),x_=3*atan(j_*2+min(max(1.5*sin(a_*PI*2)*exp(-max(A_*A_*15,0)),-1),1)/2),d_=9e-3,r_=r_*(1-d)+x_*x_*d_,w_=w_*(1-d_)+r_*d_,y_=y_*(1-d_)+w_*d_,u_=min(max(y_,.2),1),u_=u_?sqrt((2-u_)*u_)/u_:1,

((D+S)*1.2-(D+S)**3*.2+x_)*u_/3


)

:

(

s=32e3,L=2**32,q=0.95,p=PI,a=b=c=d=e=f=l=m=x=A=B=0,w=(n,r)=>(x=r,l=1/n/s),v=(i,j,r,z)=>(e-k>0?(w(i,0),m=0):x<1&(m>=1)?w(-j,1):x%3>0&m<r?(w(L,2),m=r):e-k?w(-z,3):m=h(m+l,0)),h=(f,r)=>(min(max(f,r),1-r)),

a_=b_=c_=e_=f_=g_=o_=p_=A_=0,r_=w_=y_=B_=2,q_=z_=0.5,v_=(a_,b_)=>a_/b_<1?(n_=1-a_/b_)*n_:0,s_=32e3*4.2/5

)